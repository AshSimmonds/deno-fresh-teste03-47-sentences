import { HandlerContext } from "$fresh/server.ts";

const redditPost = await fetch('https://www.reddit.com/r/EntrepreneurRideAlong/comments/vw6yeo/47_sentences_thatll_make_you_more_money_than_a_4/.json');

const postBody = await redditPost.json();

let sentences = postBody[0].data.children[0].data.selftext.split('.');

sentences = sentences.map(sentence => sentence.replace(/\n\n/g, '') + '.');

sentences.shift();
sentences.pop();
sentences.pop();
sentences.pop();

console.log(sentences);

export const handler = (_req: Request, _ctx: HandlerContext): Response => {

    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

    const body = randomSentence;

    console.log(body);

    return new Response(body);
};
