import { compose, composeP, invoker, map, prop, chain } from 'ramda';
import Either from 'data.either';
import Maybe from 'data.maybe';
import Task from 'data.task';
import daggy from 'daggy';
import fetch from 'isomorphic-fetch';

const Video = daggy.tagged('id', 'thumbnail', 'url', 'title');

export const Empty = Either.Left('Search for YouTube videos');


// makeUrl :: String -> Maybe Url
const makeUrl = (term) =>
  term && term.length > 0
    ? Maybe.Just(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&type=video&q=${term}&key=AIzaSyBn6VAt-hqQEowrEouhsL_k7RqJ2zSsoNI`)
    : Maybe.Nothing()
  ;

// getJson -> HttpResponse -> Promise JSON
const getJson = invoker(0, 'json');

// httpGet :: String -> Task Error JSON
const httpGet = (url) =>
  new Task((reject, resolve) =>
    fetch(url).then(composeP(resolve, getJson)).catch(reject)
  );

// maybeHttpGet :: e -> Maybe String -> Task Error (Either e JSON)
const maybeHttpGet = (e) => (url) =>
  url.cata({
    Just: compose(map(Either.Right), httpGet),
    Nothing: () => Task.of(e)
  });

// toVideo :: JSON -> Video
const toVideo = json => {
  const {
    id: { videoId },
    snippet: { thumbnails: { high: { url: thumbnail } }, title }
  } = json;
  return Video(videoId, thumbnail, `https://www.youtube.com/watch?v=${videoId}`, title);
};

// toVideos :: JSON -> [Video]
const toVideos = compose(map(toVideo), prop('items'));

// searchVideos :: String -> Task Error (Either Empty [Video])
export const searchVideos = compose(map(map(toVideos)), maybeHttpGet(Empty), makeUrl)
