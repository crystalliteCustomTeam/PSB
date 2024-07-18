
export async function fetchAPI(query = {}) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}?query=${encodeURIComponent(query)}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    console.log(json.data);
    return json.data.bsps;
}


export async function getPostList(endCursor = null, taxonomy = null) {
    let condition = `after: "${endCursor}", first: 6, where: {orderby: {field: DATE, order: DESC}}`;

    if (taxonomy) {
        condition = `after: "${endCursor}", first: 6, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
    }

    const query = `{
        bsps {
            nodes {
            date
            slug
            title
            excerpt(format: RENDERED)
            featuredImage {
                node {
                mediaDetails {
                    file
                    sizes {
                    sourceUrl
                    width
                    height
                    }
                }
                }
            }
            author {
                node {
                name
                avatar {
                    url
                }
                description
                }
            }
            bSPCategories {
                nodes {
                name
                slug
                }
            }
            }
        }
        }
    `;
    const data = await fetchAPI(query);
    console.log(data);
    return data.nodes;
}