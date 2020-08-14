import React from "react";

import { PageWrapper, Content, ContentProps } from "./styles";

interface PageDefaultProps extends ContentProps {}

const PageDefault: React.FC<PageDefaultProps> = ({
  contentMaxWidth,
  children,
}) => {
  return (
    <PageWrapper>
      <Content contentMaxWidth={contentMaxWidth}>{children}</Content>
    </PageWrapper>
  );
};

export default PageDefault;
