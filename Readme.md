# Hook use-screen-dimensions

Custom react hook to get current window/screen dimensions

<br/>

## Installation

<br/>

- npm:

```shell
npm install use-screen-dimensions
```

- yarn:

```shell
yarn add use-screen-dimensions
```

## How to use

<br/>

```ts
import React from "react";

import {useScreenDimensions} from "use-screen-dimensions";

const Component: React.FC = () => {
  const { width, height } = useScreenDimensions();

  console.log("width: " + width + "height: " + height);

  return (
    <div>
      <h1>
        Height: {width} | Width: {height}
      </h1>
    </div>
  );
};
```
