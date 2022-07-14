import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { foo } = router.query;

  return (
    <p>
      Post: {pid} {foo}
    </p>
  );
};

export default Post;
