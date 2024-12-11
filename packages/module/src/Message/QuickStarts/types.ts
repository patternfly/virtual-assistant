import { ButtonProps } from '@patternfly/react-core';

export interface AccessReviewResourceAttributes {
  group?: string;
  resource?: string;
  subresource?: string;
  verb?: K8sVerb;
  name?: string;
  namespace?: string;
}

export type K8sVerb = 'create' | 'get' | 'list' | 'update' | 'patch' | 'delete' | 'deletecollection' | 'watch';

export interface QuickStartSpec {
  version?: number;
  displayName: string;
  durationMinutes?: number;
  icon: React.ReactNode;
  description: string;
  prerequisites?: string[];
  introduction?: string;
  tasks?: QuickStartTask[];
  conclusion?: string;
  nextQuickStart?: string[];
  accessReviewResources?: AccessReviewResourceAttributes[];
  link?: QuickStartExternal;
  type?: QuickStartType;
}
export interface QuickStartExternal {
  href: string;
  text?: string;
}

export interface QuickStartType {
  text: string;
  color?: 'green' | 'purple' | 'grey' | 'blue' | 'orange' | 'red' | 'teal' | 'orangered' | 'yellow';
}

export interface QuickStart {
  apiVersion?: string;
  kind?: string;
  metadata: ObjectMetadata;
  spec: QuickStartSpec;
}

export interface ObjectMetadata {
  name: string;
  annotations?: { [key: string]: string };
  clusterName?: string;
  creationTimestamp?: string;
  deletionGracePeriodSeconds?: number;
  deletionTimestamp?: string;
  finalizers?: string[];
  generateName?: string;
  generation?: number;
  labels?: { [key: string]: string };
  managedFields?: any[];
  namespace?: string;
  ownerReferences?: OwnerReference[];
  resourceVersion?: string;
  uid?: string;
  // language can be: en
  language?: string;
  // country can be: US
  country?: string;
  // locale is a combination of language and country, for example: en_US
  locale?: string;
  // anything else to custom define
  [key: string]: any;
}

export interface OwnerReference {
  name: string;
  kind: string;
  uid: string;
  apiVersion: string;
  controller?: boolean;
  blockOwnerDeletion?: boolean;
}

export interface QuickStartTask {
  title?: string;
  description?: string;
  review?: QuickStartTaskReview;
  summary?: QuickStartTaskSummary;
  proc?: string;
}

export interface QuickStartTaskReview {
  instructions?: string;
  failedTaskHelp?: string;
}

export interface QuickStartTaskSummary {
  success?: string;
  failed?: string;
}

export interface QuickstartAction {
  /** Screen reader aria label. */
  'aria-label': string;
  /** Icon to be rendered as a plain button, by default Bookmark outlined will be used. */
  icon?: React.ComponentType<unknown>;
  /** Callback with synthetic event parameter. */
  onClick?: (e: React.SyntheticEvent) => void;
  /** Additional button props to be rendered as extra props. */
  buttonProps?: ButtonProps;
}
