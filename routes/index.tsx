/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Just playing around with the new Deno / Fresh / Deploy stack.  Saw some goofy wantrepreneur quotes on reddit, decided to see how quick can make it into an API. Took about 40 mins, plus clean-up.
      </p>
      <p class={tw`my-6`}>
        API: <a href="/api/quote">/api/quote</a><br />
        <br />
        Source thread: <a href="https://www.reddit.com/r/EntrepreneurRideAlong/comments/vw6yeo/47_sentences_thatll_make_you_more_money_than_a_4/">https://www.reddit.com/r/EntrepreneurRideAlong/comments/vw6yeo/47_sentences_thatll_make_you_more_money_than_a_4/</a><br />
        <br />
        Source code: <a href="https://github.com/AshSimmonds/deno-fresh-teste03-47-sentences" >https://github.com/AshSimmonds/deno-fresh-teste03-47-sentences</a>
      </p>
      <Counter start={3} />
    </div>
  );
}
