<!--
-----------------------------------------------
	画像と説明が入るカード
-----------------------------------------------
-->
<figure class="image-card">
    <!-- todo: image loading -->
    <div class="image-wrap">
        <img class="img" src={src} alt={alt}>
    </div>
    <figcaption>{figcaption}</figcaption>
</figure>

<script>
    export let src;
    export let alt;
    export let figcaption = '';
</script>

<style lang="scss">
.image-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-wrap {
        overflow: hidden;
        border-radius: 20px;
        width: 500px;
        height: 300px;

        .img {
            width: 100%;
            height: 100%;
            transition-duration: 0.3s;
            object-fit: cover;
            object-position: center;

            &:hover {
                transform: scale(1.1);
                transition-duration: 0.3s;
            }
        }
    }

    figcaption {
        margin-top: 0.8em;
        color: rgba(0,0,0,0.502);
    }
}
</style>
