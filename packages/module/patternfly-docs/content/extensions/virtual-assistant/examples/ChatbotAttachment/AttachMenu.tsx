import React from 'react';
import AttachMenu from '@patternfly/virtual-assistant/dist/dynamic/AttachMenu';
import { Button, Divider, DropdownGroup, DropdownItem, DropdownList } from '@patternfly/react-core';
import { BellIcon, CodeIcon, ClipboardIcon, CalendarAltIcon, UploadIcon } from '@patternfly/react-icons';
import PaperclipIcon from './PaperclipIcon';
import AttachmentIcon from './AttachmentIcon';

const initialMenuItems = [
  <DropdownList key="list-1">
    <DropdownItem value="auth-operator Pod" id="0" icon={<img src={AttachmentIcon} alt="Pod icon" />}>
      <div className="pf-chatbot__menu-operator">
        auth-operator
        <div className="pf-v6-c-menu__item-description">Pod</div>
      </div>
    </DropdownItem>
  </DropdownList>,
  <DropdownGroup key="group2">
    <DropdownList>
      <DropdownItem value="Alerts" id="1" icon={<BellIcon />}>
        Alerts
      </DropdownItem>
      <DropdownItem value="Events" id="2" icon={<CalendarAltIcon />}>
        Events
      </DropdownItem>
      <DropdownItem value="Logs" id="3" icon={<ClipboardIcon />}>
        Logs
      </DropdownItem>
      <DropdownItem value="YAML - Status" id="4" icon={<CodeIcon />}>
        YAML - Status
      </DropdownItem>
      <DropdownItem value="YAML - All contents" id="5" icon={<CodeIcon />}>
        YAML - All contents
      </DropdownItem>
    </DropdownList>
  </DropdownGroup>
];

const uploadMenuItems = [
  <Divider key="divider" />,
  <DropdownList key="list-2">
    <DropdownItem key="upload" value="upload" id="upload" icon={<UploadIcon />}>
      Upload from computer
    </DropdownItem>
  </DropdownList>
];

export const AttachmentMenuExample: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [userFacingMenuItems, setUserFacingMenuItems] = React.useState<React.ReactNode>([]);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
    setUserFacingMenuItems(initialMenuItems.concat(uploadMenuItems));
  };

  const findMatchingElements = (elements: React.ReactNode[], targetValue: string) => {
    let matchingElements = [] as React.ReactNode[];

    elements.forEach((element) => {
      if (React.isValidElement(element)) {
        // Check if the element's value matches the targetValue
        if (element.props.value && element.props.value.toLowerCase().includes(targetValue.toLowerCase())) {
          matchingElements.push(element);
        }

        // Recursively check the element's children
        const children = React.Children.toArray(element.props.children);
        matchingElements = matchingElements.concat(findMatchingElements(children, targetValue));
      }
    });

    return matchingElements;
  };

  const onTextChange = (textValue: string) => {
    if (textValue === '') {
      setUserFacingMenuItems(initialMenuItems.concat(uploadMenuItems));
      return;
    }

    const newMenuItems = findMatchingElements(initialMenuItems, textValue);
    // this is necessary because the React nodes we find traversing the recursive search
    // aren't correctly wrapped in a DropdownList. This leads to problems with the
    // auth-operator item where it winds up floating in a bad place in the DOM and never
    // gets removed
    setUserFacingMenuItems(
      <>
        <DropdownList>
          {newMenuItems.map((item) => item)}
          {newMenuItems.length === 0 && <DropdownItem key="no-items">No results found</DropdownItem>}
        </DropdownList>
        {uploadMenuItems.map((item) => item)}
      </>
    );
  };

  return (
    <AttachMenu
      filteredItems={userFacingMenuItems}
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      onOpenChangeKeys={['Escape']}
      // eslint-disable-next-line no-console
      onSelect={(_ev, value) => console.log('selected', value)}
      handleTextInputChange={onTextChange}
      popperProps={{ direction: 'up', distance: '8' }}
      searchInputPlaceholder="Search cluster resources..."
      toggle={(toggleRef) => (
        <Button
          style={{
            alignItems: 'center',
            borderRadius: '50%',
            display: 'flex',
            height: '48px',
            justifyContent: 'center',
            padding: '0',
            width: '48px',
            lineHeight: '1rem'
          }}
          ref={toggleRef}
          onClick={onToggleClick}
          icon={<img src={PaperclipIcon} alt="Add an attachment" />}
        />
      )}
    />
  );
};
