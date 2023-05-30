import { useRouter } from "next/dist/client/router";
import Heading from "./Heading";

const PostInfo = ({ post }) => {
  const { title, body } = post || {};
  const router = useRouter();

  if (!post) {
    return <Heading tag="h3" text="Empty post" />;
  }

  return (
    <>
      <button onClick={() => router.push("/posts")}>Back to posts</button>

      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
