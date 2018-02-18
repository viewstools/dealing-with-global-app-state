# Some ways of dealing with (global) application state and passing less props down your components

[Here's a little video](https://youtu.be/kUT0crvNhoA) where we explore how we can share
state that belongs to more than one component and maybe even the whole app.

- The simplest is to just use React's state and pass props around, you can see how that's
   done [here](https://github.com/viewstools/dealing-with-global-app-state/commit/7ed532750053c6d157bedd159e9099aaaa8aa937).

- That can get a bit messy when your app grows, so then, many people choose something like [Redux](https://redux.js.org).
[See the refactored code here](https://github.com/viewstools/dealing-with-global-app-state/commit/ee1d1e00643e3fbb46267874d424881755f53bfa).

- As we understand more about how to structure React applications, the community is coming up
with new ways of doing this like [unstated](https://github.com/jamiebuilds/unstated), a
   new library that uses a Subscriber/Consumer abstraction based off React's
   [new context API](https://github.com/reactjs/rfcs/pull/2). [See it here](https://github.com/viewstools/dealing-with-global-app-state/commit/3d49d77ce306a17354dee89e40143ab9174cb370).

By the way, if the structure of your app remains flat, just use state and pass a
prop! If it grows, then maybe consider 2 and 3 :).

How do you manage global state in your apps?

Curious about what that `.view` file is? Check out https://docs.views.tools ;).
