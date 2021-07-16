import React, { FC, useEffect } from 'react';
import mermaid from 'mermaid';

const DEFAULT_CONFIG = {
  startOnLoad: true,
  theme: 'forest',
  logLevel: 'fatal',
  securityLevel: 'strict',
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    curve: 'linear',
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 120,
    height: 30,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false,
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 16,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 4,
    axisFormat: '%Y-%m-%d',
  },
};

export interface MermaidProps {
  name?: any;
}

export const Mermaid: FC<MermaidProps> = ({ children }) => {
  mermaid.initialize(DEFAULT_CONFIG);

  useEffect(() => {
    mermaid.contentLoaded();
  }, [children]);

  return (
    <div className="mermaid" style={{ textAlign: 'center' }}>
      {children}
    </div>
  );
};
