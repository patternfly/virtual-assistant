import React from 'react';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import { Radio } from '@patternfly/react-core/dist/dynamic/Radio';
import { FormGroup } from '@patternfly/react-core/dist/dynamic/FormGroup';
import { Stack } from '@patternfly/react-core/dist/dynamic/Stack';

export const FileDetailsLabelExample: React.FunctionComponent = () => {

  const labelState = React.useState('plain');

  return (
    <Stack hasGutter>
      <FormGroup role="radiogroup" isInline fieldId="basic-form-radio-group" label="Variant">
        <Radio name="basic-inline-radio" label="Plain" id="plain" />
        <Radio name="basic-inline-radio" label="Clickable" id="clickable" />
        <Radio name="basic-inline-radio" label="Loading" id="loading" />
      </FormGroup>
      <div className="pf-chatbot__file-details-example">
        <FileDetailsLabel
          fileName="auth-operator.yml"
          // eslint-disable-next-line no-console
          onClose={() => console.log('clicked close button!')}
          // eslint-disable-next-line no-console
          {...(labelState === 'clickable' && {onClick: () => console.log('clicked entire button!')})}
          {...(labelState === 'loading' && {isLoading: true})}
        />
      </div>
    </Stack>

  );
}
