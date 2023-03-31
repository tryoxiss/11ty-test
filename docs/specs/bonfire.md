---
title: Bonfire Spec Versions
layout: "listout.njk"
eleventyExcludeFromCollections: true
--- 


{% for bonfire in collections.bonfire %}
- [{{ bonfire.data.title }}]({{bonfire.url}})
{% endfor %}