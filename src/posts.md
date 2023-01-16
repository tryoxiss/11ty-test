---
title: Posts Index
layout: "listout.njk"
eleventyExcludeFromCollections: true
--- 

{% for posts in collections.posts limit:30 reversed %}
<!-- class="code-toolbar"  -->
<div class="postcard">
<a href="{{posts.url}}"> 
    <h2>{{ posts.data.title }}</h2>
    <p>(IDK how to have a preview yet)</p>
</a>
</div>

{% endfor %}