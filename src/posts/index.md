---
title: Posts Index
layout: "listout.njk"
tags: NONE
--- 

{% for posts in collections.posts %}

<div class="code-toolbar">
<a class="postcard" href="{{posts.url}}"> 
    <h2>{{ posts.data.title }}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus quos magni molestias deleniti. Blanditiis numquam, id eveniet doloribus impedit voluptas veritatis temporibus, commodi illo, quod magnam quibusdam quisquam ea reiciendis totam.</p>
</a>
</div>

{% endfor %}