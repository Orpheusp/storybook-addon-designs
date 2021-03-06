import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../../Button'

import Docs from './docs.mdx'

export default {
  title: 'Docs/Advanced usage',
  decorators: [withDesign],
  parameters: {
    docs: { page: Docs }
  }
}

export const embedMultipleDesigns = () => <Button>Button</Button>

embedMultipleDesigns.story = {
  parameters: {
    design: config([
      {
        type: 'figma',
        url:
          'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
      },
      {
        type: 'link',
        url:
          'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
      }
    ])
  }
}

export const setTabNames = () => <Button>Button</Button>

setTabNames.story = {
  parameters: {
    design: config([
      {
        name: 'Foo',
        type: 'figma',
        url:
          'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
      },
      {
        name: 'Bar',
        type: 'link',
        url:
          'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
      }
    ])
  }
}
