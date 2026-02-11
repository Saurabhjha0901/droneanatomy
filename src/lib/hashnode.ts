export interface HashnodePost {
    id: string;
    title: string;
    brief: string;
    slug: string;
    coverImage?: {
        url: string;
    };
    publishedAt: string;
    content?: {
        html: string;
    };
    tags?: {
        name: string;
    }[];
}

const HASHNODE_GQL_URL = 'https://gql.hashnode.com';

export async function fetchHashnode(query: string, variables: any = {}) {
    try {
        const res = await fetch(HASHNODE_GQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            }),
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error('[Hashnode] Error fetching:', res.statusText);
            return null;
        }

        const json = await res.json();
        if (json.errors) {
            console.error('[Hashnode] GraphQL Errors:', json.errors);
            return null;
        }
        return json.data;
    } catch (error) {
        console.error('[Hashnode] Network Error:', error);
        return null;
    }
}

export async function getHashnodePosts(host: string, first: number = 10): Promise<HashnodePost[]> {
    const query = `
    query Publication($host: String!, $first: Int!) {
      publication(host: $host) {
        posts(first: $first) {
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
              coverImage {
                url
              }
              tags {
                name
              }
            }
          }
        }
      }
    }
  `;

    const data = await fetchHashnode(query, { host, first });
    return data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
}

export async function getHashnodePostBySlug(host: string, slug: string): Promise<HashnodePost | null> {
    const query = `
    query Post($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
          content {
            html
          }
          tags {
            name
          }
        }
      }
    }
  `;

    const data = await fetchHashnode(query, { host, slug });
    return data?.publication?.post || null;
}
