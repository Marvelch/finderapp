function testing({ utama }) {
  return { utama };
}

export async function getStaticProps() {
  const utama = "Hello";
  const kedua = [6, 7, 8, 9, 10];

  return {
    props: {
      utama,
    },
  };
}

export default testing;
