import { ReactNode } from "react";
import "./Page.css";

interface PageProps {
  ChapterName: string;
  ChapterNumber: number;
  children: ReactNode;
  PageNumber: number;
}

const Page = ({
  ChapterNumber,
  ChapterName,
  children,
  PageNumber,
}: PageProps) => {
  return (
    <div className="Page">
      <div className="title">Title : "Random Reset"</div>
      <div className="chapter">
        Chapter {ChapterNumber} : {ChapterName}
      </div>
      <div className="content">{children}</div>
      <footer className="caption"> pg: {PageNumber}</footer>
    </div>
  );
};

export default Page;
