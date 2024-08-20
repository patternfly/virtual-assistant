// eslint-disable-next-line no-restricted-imports
import { createUseStyles, Styles } from "react-jss";

export function createVaStyles<C extends string = string, Props = unknown, Theme = typeof defaultTheme>(styles: Styles<C, Props, Theme> | ((theme: Theme) => Styles<C, Props, undefined>)) {
  return createUseStyles(styles)
}

export const defaultTheme = {
  global: {
    colors: {
      primary: 'var(--pf-v5-global--danger-color--100)',
      primaryInactive: 'var(--pf-v5-c-label--m-red__content--Color)',
      light100: 'var(--pf-v5-global--Color--light-100)',
      backgroundPrimaryInactive: 'var(--pf-v5-c-label--m-red--BackgroundColor)',
      background100: 'var(--pf-v5-global--BackgroundColor--100)',
      background200: 'var(--pf-v5-global--BackgroundColor--200)',

    },
    borderRadiusBubble: '14px'
  },
  components: {
    VirtualAssistant: {
      card: {
        borderRadius: '20px',
      },
      textArea: {
        borderRadius: "50px",
      }
    },
    VirtualAssistantHeader: {
      background: 'linear-gradient(180deg, #C9190B 0%, #A30000 100%, #3D0000 100.01%)'
    },
    AssistantMessageEntry: {
      label: {
        borderRadius: 'var(--pf-v5-global--BorderRadius--lg)'
      }
    }
  }
}

export default defaultTheme;
