<template>
  <button class="share">
    <h1 class="share__title" >
      Поделитесь с друзьями
    </h1>
    <ul class="share__social-list">
      <li>
        <a href="#">
          <svg class="share__social-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22">
            <defs>
              <path id="6d47a" d="M282.3 68.6h-.99c-.945 0-1.21.676-1.21.676v2.074h2.567l-.459 2.75H280.1v6.05h-2.75V74.1h-2.2v-2.75h2.2v-2.103c.55-3.213 3.369-3.397 3.369-3.397h1.581zM279 62c-6.075 0-11 4.925-11 11 0 6.076 4.925 11 11 11 6.076 0 11-4.924 11-11 0-6.075-4.924-11-11-11z"/>
            </defs>
            <g>
              <g transform="translate(-268 -62)">
                <use xlink:href="#6d47a"/>
              </g>
            </g>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="share__social-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22">
            <defs>
              <path id="h97ca" d="M331.503 70.472c.09 1.32-.323 4.142-2.407 6.257-2.085 2.117-5.346 2.056-5.346 2.056-3.17 0-4.583-1.148-4.583-1.148 2.719.05 4.028-1.159 4.028-1.159-2.457-.292-2.73-1.834-2.73-1.834 1.472.433 2.277 0 2.277 0-3.263-1.25-3.213-3.275-3.213-3.275.353.282 1.35.473 1.35.473-.977-.726-1.35-1.542-1.35-2.288 0-.745.464-1.38.464-1.38.413.403 1.792 2.358 5.981 2.287-.231-2.166 1.42-3.235 2.769-3.235 1.35 0 2.196 1.29 2.196 1.29.443-.12 1.49-.816 1.49-.816-.423 1.149-1.369 1.844-1.369 1.844 1.057-.212 1.833-.564 1.833-.564-.464.756-1.39 1.492-1.39 1.492zM326 62c-6.075 0-11 4.925-11 11 0 6.076 4.925 11 11 11 6.076 0 11-4.924 11-11 0-6.075-4.924-11-11-11z"/>
            </defs>
            <g>
              <g transform="translate(-315 -62)">
                <use xlink:href="#h97ca"/>
              </g>
            </g>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="share__social-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22">
            <defs>
              <path id="4lg1a" d="M379.876 69.741c-.017.287-.732 1.461-.99 1.798a68.332 68.332 0 0 0-1.083 1.504c-.168.242-.17.473-.17.473.014.057-.05.157.444.494.494.336 1.396 1.396 1.396 1.396.212.245.404.278.404.737 0 .833-.861.74-.861.74h-1.53c-.247 0-.352.056-.404.017-.054-.037-1.093-.97-1.093-.97-.654-.715-1.166-.67-1.166-.67-.518-.011-.889.409-.889 1.201 0 .583-.477.657-.477.657-.324 0-1.188.126-2.463-.541-2.457-1.39-3.947-4.648-4.007-4.779-.06-.13-.61-1.5-.823-2.02-.212-.52.362-.66.362-.66h1.827c.497 0 1.49 2.09 1.734 2.506.188.323.623 1.322.953 1.322.474 0 .296-1.607.296-1.607v-1.1c0-.489-.227-.012-.227-.012h-.397c.506-1.11 1.772-1.11 1.772-1.11h1.375c.51 0 .551.63.551.63s-.04 1.79-.031 2.44c.019.563.315.847.458.847.143 0 .258-.005.494-.446.661-1.636 1.789-3.202 1.789-3.202s.111-.252.577-.21c1.63.116 2.041.367 2.041.367s.148.03.138.198zM373 62c-6.076 0-11 4.924-11 11 0 6.075 4.925 11 11 11s11-4.925 11-11c0-6.076-4.925-11-11-11z"/>
            </defs>
            <g>
              <g transform="translate(-362 -62)">
                <use  xlink:href="#4lg1a"/>
              </g>
            </g>
          </svg>
        </a>
      </li>
    </ul>
  </button>
</template>

<script>
    export default {
        name: "BaseShare"
    }
</script>

<style lang="scss" scoped>
  .share__title {
    color: $color-white;
    font-family: Oswald;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
  }
  .share__social-list {
    display: none;

    list-style: none;
  }
  .share {
    height: 35px;

    background: none;
    border-radius: 2px;
    border: 1px solid $color-white;
    cursor: pointer;
    &:hover {
      border-color: $color-pink-near;
      .share__title {
        display: none;
      }

      .share__social-list {
        display: flex;
        justify-content: space-around;
        padding: 0;
        margin-top: 5px;
      }
    }
  }
  .share__title {
    width: 128px;
    margin: 5px auto;
  }
  .share__social-icon {
    fill: $color-white;
    &:hover {
      fill: $color-pink-near;
    }
  }
</style>
