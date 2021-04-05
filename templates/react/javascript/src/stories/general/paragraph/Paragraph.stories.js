import React from 'react';
import {Paragraph, BoldParagraph, ItalicParagraph} from "./Paragraph.js";

export default {
    title: "General/Paragraph",
    component: Paragraph
}

const ParagraphTextStory = (args) => <Paragraph {...args}/>;
const BoldParagraphTextStory = (args) => <BoldParagraph {...args}/>;
const ItalicParagraphTextStory = (args) => <ItalicParagraph {...args}/>;

export const ParagraphText = ParagraphTextStory.bind({});
export const BoldParagraphText = BoldParagraphTextStory.bind({});
export const ItalicParagraphText = ItalicParagraphTextStory.bind({});

ParagraphText.args = {
    text: "It's just a simple paragraph with color #8F8F8F HEX code.",
    color: "#8f8f8f"
};

BoldParagraphText.args = {
    text: "It's a bold paragraph with color #8F8F8F HEX code.",
    color: "#8f8f8f"
};

ItalicParagraphText.args = {
    text: "It's an italic paragraph with color #8F8F8F HEX code.",
    color: "#8F8F8F"
};
