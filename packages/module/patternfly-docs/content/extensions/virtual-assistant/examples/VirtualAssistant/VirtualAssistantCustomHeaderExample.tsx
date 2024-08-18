import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import { CardHeader, Dropdown, DropdownItem, DropdownList, MenuToggle, MenuToggleElement } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon';
import UserIcon from '@patternfly/react-icons/dist/dynamic/icons/user-icon';

export const BasicExample: React.FunctionComponent = () => {
  const [ isOpen, setIsOpen ] = React.useState<boolean>(false);

  const headerActions = (
    <>
      <Dropdown
        popperProps={{ position: 'right' }}
        toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
          <MenuToggle
            ref={toggleRef}
            isExpanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            variant="plain"
            aria-label="Card header images and actions example kebab toggle"
          >
            <EllipsisVIcon aria-hidden="true" />
          </MenuToggle>
        )}
        isOpen={isOpen}
        onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      >
        <DropdownList>
          <DropdownItem key="action">Action</DropdownItem>
          <DropdownItem key="action2">Action 2</DropdownItem>
        </DropdownList>
      </Dropdown>
    </>
  );

  return (
    <VirtualAssistant customHeader={
      <CardHeader actions={{ actions: headerActions }}>
        <UserIcon className='pf-v5-u-mr-sm' />My custom header
      </CardHeader>
    } />
  )}
