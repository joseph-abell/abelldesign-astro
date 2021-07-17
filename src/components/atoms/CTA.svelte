<div class="cta">
    <img src="./cta_logo.png" />
    <p class="deck">{deck}</p>
    <div class="credit"><p>{client}</p><p>{project}</p></div>
</div>

<style>
    .cta {
        width: 100vw;
        height: 100vh;
        background: url("cta.jpg") no-repeat center center fixed; 
        background-size: cover;
        color: white;
        position: relative;
    }
    img {
        width: 200px;
        display: block;
        top: 40px;
        position: absolute;
        left: 40px;
    }
    p {
                text-shadow: 2px 2px rgba(0, 0, 0, 0.7);
    }
    .deck {
        position: absolute;
        bottom: 40px;
        font-size: 30px;
        left: 40px;
        width: 40vw;

    }
    .credit {
        position: absolute;
        bottom: 40px;
        right: 40px;
        text-align: right;
    }
</style>

<script>
export let deck;
export let client;
export let project;
</script>