export const getPublished = (item) => item.stage === "PUBLISHED";
export const getSlug = (item) => ({ params: { slug: item.slug } });
export const orderByCreatedAtDate = (a, b) => a.createdAt - b.createdAt;
export const showOnHomepage = (item) => item.showOnHomepage;
export const addOddEven = (item, index) => ({
  ...item,
  oddEven: index % 2,
});

export const fetchData = async (
  fetch,
  query: string,
  variables?: { id?: string; slug?: string }
): Promise<any> => {
  let response;

  if (variables) {
    response = await fetch(
      "https://api-eu-central-1.graphcms.com/v2/ckouf3olwcb6r01z1db541r29/master",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      }
    );
  } else {
    response = await fetch(
      "https://api-eu-central-1.graphcms.com/v2/ckouf3olwcb6r01z1db541r29/master",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      }
    );
  }

  const { data } = await response.json();

  return data;
};
