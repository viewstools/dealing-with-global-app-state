# Dealing with global state and passing less props down your components

Here's a little video where we explore how we can share state that belongs to
more than one component and maybe even the whole app.

1. The first way to go about it is to just pass props, you can see how that's
   done [here](https://github.com/viewstools/dealing-with-global-app-state/commit/7ed532750053c6d157bedd159e9099aaaa8aa937).

2. The second way we explore is with [Redux](https://redux.js.org)
   [here](https://github.com/viewstools/dealing-with-global-app-state/commit/ee1d1e00643e3fbb46267874d424881755f53bfa).

3. And last but not least, [unstated](https://github.com/jamiebuilds/unstated) a
   new library that uses a Subscriber/Consumer abstraction based off React's
   [new context API](https://github.com/reactjs/rfcs/pull/2)
   [here](https://github.com/viewstools/dealing-with-global-app-state/commit/3d49d77ce306a17354dee89e40143ab9174cb370).

By the way, if the structure of your app remains flat, just use state and pass a
prop! If it grows, then maybe consider 2 and 3 :).

Curious about what that `.view` file is? Check out https://docs.views.tools ;).
