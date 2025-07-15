import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Button from "./Components/Button";
import Page from "./Components/Page";
import storyData from "./data/story.json";

type Paragraph = {
  ParagraphNumber: number;
  ParagraphContent: string;
};

type PageType = {
  PageNumber: number;
  Content: Paragraph[];
};

type ChapterType = {
  ChapterNumber: number;
  ChapterName: string;
  Pages: PageType[];
};

type BookType = {
  Title: string;
  Chapters: ChapterType[];
};

const App = () => {
  const story: BookType = storyData[0];
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const chapter = story.Chapters[currentChapterIndex];
  const page = chapter.Pages[currentPageIndex];

  const goToNextPage = () => {
    if (currentPageIndex < chapter.Pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else if (currentChapterIndex < story.Chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      setCurrentPageIndex(0);
    }
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    } else if (currentChapterIndex > 0) {
      const previousChapter = story.Chapters[currentChapterIndex - 1];
      setCurrentChapterIndex(currentChapterIndex - 1);
      setCurrentPageIndex(previousChapter.Pages.length - 1);
    }
  };

  return (
    <div className="App">
      {/* Desktop buttons */}
      <div className="desktop-buttons">
        <Button btnValue="<" onClick={goToPreviousPage} />
      </div>

      <Page
        ChapterName={chapter.ChapterName}
        ChapterNumber={chapter.ChapterNumber}
        PageNumber={page.PageNumber}
      >
        {page.Content.map((para) => (
          <p key={para.ParagraphNumber}>{para.ParagraphContent}</p>
        ))}
      </Page>

      <div className="desktop-buttons">
        <Button btnValue=">" onClick={goToNextPage} />
      </div>

      {/* Mobile buttons */}
      <div className="button-container">
        <Button btnValue="<" onClick={goToPreviousPage} />
        <Button btnValue=">" onClick={goToNextPage} />
      </div>
    </div>
  );
};

export default App;
