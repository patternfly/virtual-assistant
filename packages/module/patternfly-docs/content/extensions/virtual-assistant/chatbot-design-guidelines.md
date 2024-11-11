---
section: PatternFly-AI
subsection: chatbot
id: About chatbot
sortValue: 1
source: design-guidelines
---

## Elements 

<!---
<> <div class="ws-docs-content-img">
![annotated image]()
<> </div>
--->

1. **Container:** The window that contains the ChatBot experience and all ChatBot components.
1. **Toggle:** Button that allows users to open and close the ChatBot window.
1. **Header:** Persistent region at the top of the ChatBot window that contains navigation, branding, and ChatBot-wide actions.
1. **Footer:** Persistent region at the bottom of the ChatBot window that contains the message bar and the footnote.
1. **Footnote (optional):** Message about any legal disclaimers or important information about the ChatBot. Footnotes are optional, but strongly recommended. For more information, refer to these [footnote guidelines](#footnotes).
1. **Messages:** Elements of the conversation between the ChatBot and the user. For more information, refer to this [additional message documentation](#messages).
1. **Attachments:** Details about files that have been uploaded to the ChatBot by the user.
1. **Navigation:** Menu that contains navigational options, including access to the conversation history.

### Toggle 

Users can use the ChatBot toggle to open and close the ChatBot window. The toggle is a floating button that's placed in the bottom corner of the UI. 

In addition to the floating toggle, you can place an icon in the masthead that acts as a ChatBot toggle. 

### Messages 

[annotated image] 

1. **Bot message:** Messages from the ChatBot, which are marked with an "AI" label to communicate the use of AI to users. You should choose a descriptive name for your ChatBot.
1. **User message:** Messages that the user has sent to the ChatBot. The color of user messages differs from ChatBot messages, to clarify the conversation.
1. **Avatar:** Representative image for your ChatBot and the user. ChatBot avatars should align with your product's brand, adhering to any brand standards that exist.
1. **Name:** Identifier for your ChatBot and the user. Choose a name for your ChatBot that users can easily identify as a bot. 
1. **Badge:** Labels ChatBot messages as "AI."
1. **Timestamp:** The relative or absolute time that a message was sent.
1. **Quick responses:** Programmable, clickable actions that allow users to quickly answer questions from the ChatBot.

### Footnotes 

[PatternFly's AI guidelines](/patternfly-ai/about-ai) include transparency, which helps build trust with users and ensure accountability. It is also necessary to adhere to Red Hat's AI policies when using ChatBot with Red Hat products.

The footnote provides a persistent space to display messaging about your product's Terms and Conditions, which focus on the rules of using the service, and Privacy Policy, which focuses on the handling of personal data.

It is highly recommended that you write content for these messages to ensure legal compliance, establish user trust, and clearly define the usage guidelines and data handling practices. 

## Usage

When ChatBots are designed to meet the needs of your users, they can improve the overall UX of your product by offering convenient, efficient, and persistent support. When your ChatBot cannot find an answer for your users, you must provide them with a method to contact human support.

Before building a ChatBot, make sure that you have justified it as an appropriate solution by asking yourself these questions:
- What are the users’ goals?
- How in-depth is the assistance the user will need?
- Does human assistance better serve your users?
- How is a ChatBot superior to online documentation, contextual support or wizards?
- What data sources or abilities can this ChatBot leverage to assist your users?

### When to use 

Use a ChatBot to offer your users on-demand help at any time and quickly provide answers to specific questions they have. 

ChatBots can often be helpful in the following scenarios:
- Technical support and troubleshooting
- Product information and documentation
- Sales and product recommendations
- Training and onboarding
- System monitoring and alerts
- Community engagement and forums
- Feedback collection and surveys
- Event assistance and scheduling

### When not to use

Do not use a ChatBot when: 
- A task could be accomplished more efficiently through the UI. 
- A process is very complex or could take a long time.
- A real human is needed for sensitive or emotional topics.

## Behavior 

### Accessing a ChatBot

Users can enter a conversation with a ChatBot by clicking on the toggle. Once the ChatBot window opens, the toggle will change to display an angle down icon to indicate that the toggle can be used to minimize the ChatBot. Users can select the toggle at any point in their journey to open and close the ChatBot as needed.

[image of a ChatBot, closed and opened]

### Sending messages and attaching files

To message the ChatBot, users can type directly into the message bar in the footer, or click any included actions. 

[annotated image of message bar with these actions]

1. **Attach button:** Allows users to upload files from their computer. For more information, view [the attachment documentation]().
1. **Use microphone button:** Supports speech recognition to allow users to use voice input.

### Using the navigation menu

The ChatBot navigation menu primarily contains a users' conversation history with the ChatBot. Clicking the menu icon opens a side drawer in the ChatBot window. 

[image of open conversation history]

By clicking into the navigation menu, users can search through previous conversations and perform additional actions, such as sharing a conversation with others. 

## Variations 

There are a few display modes that users can choose when interacting with a ChatBot.

[image of display mode menu]

- **Overlay:** The default display mode, which places the ChatBot window on top of a product's UI. In overlay mode, the ChatBot can be closed and opened through the toggle. 

    [image]

- **Docked:** Anchors the ChatBot in the UI as a side drawer. When docked, the ChatBot window is persistent, and cannot be toggled.

    [image]

- **Fullscreen:** The ChatBot window takes up the whole screen.

     [image]

## Placement

Your users will expect your ChatBot to be in a reliable, permanent location. By default, this will be in the bottom right of the screen.

## Content considerations

For guidance on writing ChatBot content, refer to our [conversation design guidelines](/patternfly-ai/conversation-design).

## Accessibility 

Although accessibility has been integrated into the design of our ChatBot components, it is important to ensure that your implementation is inclusive of all users. For more guidance, refer to [our accessibility guidelines](/accessibility/about-accessibility).