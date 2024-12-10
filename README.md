SuprSend Inbox Next.js Integration Example
====================================

This repository provides an example of integrating **SuprSend Inbox** into a Next.js application to enable real-time notifications for your users. SuprSend simplifies notification management and helps you keep your users informed and engaged.

Features
--------

-   Effortless integration of SuprSend Inbox in a Next.js app.
-   Real-time notifications.
-   Customizable inbox with Headless Inbox mode for complete control over UI.

Prerequisites
-------------

-   Node.js (version 14 or higher)
-   Yarn (recommended for package management)

Getting Started
---------------

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/suprsend-next-inbox.git
cd suprsend-next-inbox
```

### 2\. Install Dependencies



```bash
yarn install
```
### 3\. Set Up SuprSend

-   Create a **SuprSend** account and get your **workspaceKey**, **subscriberId**, and **distinctId**.
-   Replace these values in the `index.js` file under `pages`:

```javascript
workspaceKey="<workspace-key>"
subscriberId="<subscriber-id>"
distinctId="<distinct-id>"
```

### 4\. Run the Project

```
yarn dev
```
Visit <http://localhost:3000> to see your working notification inbox.

Customization
-------------

You can customize the notifications UI using the **Headless Inbox** feature for full control over the notification display.

For more details, refer to the [SuprSend Documentation](https://docs.suprsend.com/docs/react-customize-inbox).
