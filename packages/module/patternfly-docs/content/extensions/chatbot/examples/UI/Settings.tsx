import React from 'react';

import Settings from '@patternfly/chatbot/dist/dynamic/Settings';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownList,
  FormGroup,
  MenuToggle,
  MenuToggleElement,
  Radio,
  Switch
} from '@patternfly/react-core';
import { ChatbotDisplayMode } from '@patternfly/chatbot/dist/dynamic/Chatbot';

export const SettingsDemo: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);
  const [isThemeOpen, setIsThemeOpen] = React.useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = React.useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = React.useState(false);
  const [displayMode, setDisplayMode] = React.useState(ChatbotDisplayMode.default);
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  const onFocus = (id: string) => {
    const element = document.getElementById(id);
    (element as HTMLElement).focus();
  };

  const onEscapePress = (event: KeyboardEvent) => {
    const target = event.target as Element;
    if (target?.id === 'voice') {
      setIsVoiceOpen(!isVoiceOpen);
      onFocus('voice');
      return;
    }
    if (target?.id === 'language') {
      setIsLanguageOpen(!isLanguageOpen);
      onFocus('language');
      return;
    }
    if (target?.id === 'theme') {
      setIsThemeOpen(!isThemeOpen);
      onFocus('theme');
      return;
    }
    setIsModalOpen(!isModalOpen);
  };

  const onThemeToggleClick = () => {
    setIsThemeOpen(!isThemeOpen);
  };

  const onThemeSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    value: string | number | undefined
  ) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);
    onFocus('theme');
    setIsThemeOpen(false);
  };

  const onLanguageToggleClick = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const onLanguageSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    value: string | number | undefined
  ) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);
    onFocus('language');
    setIsLanguageOpen(false);
  };

  const onVoiceToggleClick = () => {
    onFocus('voice');
    setIsVoiceOpen(!isVoiceOpen);
  };

  const onVoiceSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    value: string | number | undefined
  ) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);
    setIsVoiceOpen(false);
  };

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  const themeDropdown = (
    <Dropdown
      isOpen={isThemeOpen}
      onSelect={onThemeSelect}
      onOpenChange={(isOpen: boolean) => setIsThemeOpen(isOpen)}
      shouldFocusToggleOnSelect
      shouldFocusFirstItemOnOpen
      shouldPreventScrollOnItemFocus
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        // We want to add the id property here as well so the label is coupled
        // with the button on screen readers.
        <MenuToggle id="theme" ref={toggleRef} onClick={onThemeToggleClick} isExpanded={isThemeOpen}>
          System
        </MenuToggle>
      )}
      ouiaId="ThemeDropdown"
    >
      <DropdownList>
        <DropdownItem value="System" key="system">
          System
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );

  const languageDropdown = (
    <Dropdown
      isOpen={isLanguageOpen}
      onSelect={onLanguageSelect}
      onOpenChange={(isOpen: boolean) => setIsLanguageOpen(isOpen)}
      shouldFocusToggleOnSelect
      shouldFocusFirstItemOnOpen
      shouldPreventScrollOnItemFocus
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        // We want to add the id property here as well so the label is coupled
        // with the button on screen readers.
        <MenuToggle id="language" ref={toggleRef} onClick={onLanguageToggleClick} isExpanded={isLanguageOpen}>
          Auto-detect
        </MenuToggle>
      )}
      ouiaId="LanguageDropdown"
    >
      <DropdownList>
        <DropdownItem value="Auto-detect" key="auto-detect">
          Auto-detect
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
  const voiceDropdown = (
    <Dropdown
      isOpen={isVoiceOpen}
      onSelect={onVoiceSelect}
      onOpenChange={(isOpen: boolean) => setIsVoiceOpen(isOpen)}
      shouldFocusToggleOnSelect
      shouldFocusFirstItemOnOpen
      shouldPreventScrollOnItemFocus
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        // We want to add the id property here as well so the label is coupled
        // with the button on screen readers.
        <MenuToggle id="voice" ref={toggleRef} onClick={onVoiceToggleClick} isExpanded={isVoiceOpen}>
          Bot
        </MenuToggle>
      )}
      ouiaId="VoiceDropdown"
    >
      <DropdownList>
        <DropdownItem value="Bot" key="bot">
          Bot
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
  const children = [
    { id: 'theme', label: 'Theme', field: themeDropdown },
    { id: 'language', label: 'Language', field: languageDropdown },
    { id: 'voice', label: 'Voice', field: voiceDropdown },
    {
      id: 'analytics',
      label: 'Share analytics',
      field: (
        <Switch
          // We want to add the id property here as well so the label is coupled
          // with the button on screen readers.
          id="analytics"
          aria-label="Togglable option for whether to share analytics"
          isChecked={isChecked}
          onChange={handleChange}
        />
      )
    },
    {
      id: 'archived-chat',
      label: 'Archive chat',
      field: (
        // We want to add the id property here as well so the label is coupled
        // with the button on screen readers.
        <Button id="archived-chat" variant="secondary">
          Manage
        </Button>
      )
    },
    {
      id: 'archive-all',
      label: 'Archive all chat',
      field: (
        // We want to add the id property here as well so the label is coupled
        // with the button on screen readers.
        <Button id="archive-all" variant="secondary">
          Archive all
        </Button>
      )
    },
    {
      id: 'delete-all',
      label: 'Delete all chats',
      field: (
        // We want to add the id property here as well so the label is coupled
        // with the button on screen readers.
        <Button id="delete-all" variant="danger">
          Delete all
        </Button>
      )
    }
  ];

  return (
    <>
      <div
        style={{
          position: 'fixed',
          padding: 'var(--pf-t--global--spacer--lg)',
          zIndex: '601',
          boxShadow: 'var(--pf-t--global--box-shadow--lg)'
        }}
      >
        <FormGroup role="radiogroup" isInline fieldId="basic-form-radio-group" label="Display mode">
          <Radio
            isChecked={displayMode === ChatbotDisplayMode.default}
            onChange={() => setDisplayMode(ChatbotDisplayMode.default)}
            name="basic-inline-radio"
            label="Default"
            id="default"
          />
          <Radio
            isChecked={displayMode === ChatbotDisplayMode.docked}
            onChange={() => setDisplayMode(ChatbotDisplayMode.docked)}
            name="basic-inline-radio"
            label="Docked"
            id="docked"
          />
          <Radio
            isChecked={displayMode === ChatbotDisplayMode.fullscreen}
            onChange={() => setDisplayMode(ChatbotDisplayMode.fullscreen)}
            name="basic-inline-radio"
            label="Fullscreen"
            id="fullscreen"
          />
          <Radio
            isChecked={displayMode === ChatbotDisplayMode.embedded}
            onChange={() => setDisplayMode(ChatbotDisplayMode.embedded)}
            name="basic-inline-radio"
            label="Embedded"
            id="embedded"
          />
        </FormGroup>
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>Launch modal</Button>
      </div>
      <Settings
        onEscapePress={onEscapePress}
        displayMode={displayMode}
        isModalOpen={isModalOpen}
        handleModalToggle={() => setIsModalOpen(!isModalOpen)}
        fields={children}
      ></Settings>
    </>
  );
};
