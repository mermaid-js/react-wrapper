import React from 'react';
import { Mermaid } from '@';

export default {
  title: 'Flowchart',
};

export const TD = () => (
  <Mermaid>{`
    graph TD
    A[Client] --> B[Load Balancer]
    B --> C[Server01]
    B --> D[Server02]
  `}</Mermaid>
);
