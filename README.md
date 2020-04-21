# mintbase-bridge

### Embed your NFT stores on your website

### NOT READY FOR USE!!!!

Still in beta, will be ready soon.
[Mintbase.io](https://mintbase.io)  
[![CircleCI](https://circleci.com/gh/Mintbase/mintbase-bridge.svg?style=svg)](https://circleci.com/gh/Mintbase/mintbase-bridge)

### Install

With `npm`:

```
npm install mintbase-bridge --save
```

With `yarn`

```
yarn add -S mintbase-bridge
```

## Documentation

Please refer to the [official Mintbase docs](https://docs.mintbase.io/developers) for
a more holistic understanding of the various Link options.

### Using a React component

```jsx
import React, { useState } from "react";
import Mintbase from "mintbase-bridge";

const EmbedMintbase = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Mintbase
        contract="0x202d2f33449bf46d6d32ae7644ada130876461a4"
        show={isOpen}
        handleClose={setIsOpen}
        dark="rgba(60, 60, 60, 1)"
        darker="rgba(12, 12, 12, 1)"
        darkAlpha="rgba(60, 60, 60, 0.8)"
      />
      <Button onClick={() => setIsOpen(true)}>Show Market</Button>
    </div>
  );
};
export default EmbedMintbase;
```

### Typescript

You can find your contract hash when you deploy your store or you can embed other folks markets as well.

```
interface MintbaseProps {
  contract: string;
  show: boolean;
  handleClose: (usClosed: boolean) => void
}
```
