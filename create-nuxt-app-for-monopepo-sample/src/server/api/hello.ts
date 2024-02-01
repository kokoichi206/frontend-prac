export default defineEventHandler(async (event) => {
  console.log("============ api hello called! ============");
  const res: { title: string } = await $fetch(
    "https://kokoichi0206.mydns.jp/json/example.json",
  );
  console.log("res.title: ", res.title);
  return {
    hello: "world",
  };
});
