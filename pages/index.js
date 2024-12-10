import dynamic from "next/dynamic";
const SuprSendInbox = dynamic(() => import("@suprsend/react-inbox"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <SuprSendInbox 
        workspaceKey='<workspace_key>'
        subscriberId='<subscriber_id>'
        distinctId='<distinct_id>'
      />
    </>
  );
}
