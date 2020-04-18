# Shopify Storefront API Types

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

Auto-generated Typescript typings for Shopify Storefront API. Current version includes all types for version: `2020-04`.

![types](https://user-images.githubusercontent.com/1438153/72280575-eb2ec200-3638-11ea-9609-4196400219f5.jpg)

## How to use

1. Install package: `npm i -S shopify-storefront-api-typings`
2. Import typings in your code. (vscode should find the typings and auto import for you).

```js
import { Checkout } from "shopify-storefront-api-typings";
```

Here is how you can get strongly typed queries with apollo:

```js
export const QUERY_CHECKOUT = gql`
  query($id: ID!) {
    checkout: node(id: $id) {
      ... on Checkout {
        ...CheckoutPartialFragment
      }
    }
  }
  ${CheckoutFragment}
`;
...
const { data } = useQuery<{ checkout: Checkout }>(QUERY_CHECKOUT);
```

Use the `Partial<>` utility if you want to create subsets of the type without getting type errors.

```js
const variant: Partial<ProductVariant> = { title: "Variant" };
```

## Build your own typings

If you want to customise the namings or the Storefront API version you can build your own typings. To do that, you need to create a Private app with Storefront API enabled.

1. Clone this repository

```sh
git clone https://github.com/caki0915/shopify-storefront-api-typings.git
```

2. Rename `.env.example` to `.env`.
3. Inside `.env` add your Shopify Storefront API endpoint and access-token.
4. Run `npm start`
