import { HandlerContext } from "$fresh/server.ts";

const redditPost = await fetch('https://www.reddit.com/r/EntrepreneurRideAlong/comments/vw6yeo/47_sentences_thatll_make_you_more_money_than_a_4/.json');


// read the post body and separate into sentences
const postBody = await redditPost.json();
const sentences = postBody[0].data.children[0].data.selftext.split('.');

// pick a random sentence
const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

// console.log(randomSentence);

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
    // const randomIndex = Math.floor(Math.random() * QUOTES.length);
    const body = randomSentence; //QUOTES[randomIndex];
    console.log(body);
    // return new Response(JSON.stringify('asdf'));
    return new Response(body);
};
