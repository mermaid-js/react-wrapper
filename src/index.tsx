import React, { FC, useEffect } from 'react';
import mermaid from 'mermaid';

type MermaidConfig = Parameters<typeof mermaid.initialize>[0];

const DEFAULT_CONFIG: MermaidConfig = {
  startOnLoad: true,
  theme: 'forest',
  logLevel: 5, // debug: 1; info: 2; warn: 3; error: 4; fatal: 5
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

export type MermaidProps = MermaidConfig;

export const Mermaid: FC<MermaidProps> = ({ children, ...mermaidConfig }) => {
  mermaid.initialize({ ...DEFAULT_CONFIG, ...mermaidConfig });

  useEffect(() => {
    mermaid.contentLoaded();
  }, [children, mermaidConfig]);

  return (
    <div className="mermaid" style={{ textAlign: 'center' }}>
      {children}
    </div>
  );
};
