export function createListingView() {
  return /*html*/ `
  <div>
  <form class="listing-create__form" hx-post="/create-listing" hx-target=".listing-create__message" enctype="multipart/form-data">
    <div class="listing-create__fields">
      <div>
        <label for="name">Name</label>
        <input
         type="text"
         id="name"
         name="name"
         maxlength="20"
         required
         class="listing-create__input">
      </div>
  
      <div>
        <label for="address">Address</label>
        <input
         type="text"
         id="address"
         name="address"
         maxlength="35"
         class="listing-create__input"
         >
      </div>
  
      <div>
        <label for="area">Area</label>
        <input
         type="text"
         id="area"
         name="area"
         maxlength="35"
         class="listing-create__input"
         >
      </div>
    
      <div>
        <label for="price">Price</label>
        <input
         type="number"
         id="price"
         name="price"
         required
         min="0"
         class="listing-create__input">
      </div>
    
      <div>
        <label for="description">Description</label>
        <textarea
         type="text"
         id="description"
         name="description"
         required
         class="listing-create__textarea"
        ></textarea>
      </div>

      <div>
        <label for="rating">Rating</label>
        <input
         type="number"
         id="rating"
         name="rating"
         required
         min="0"
         max="10"
         class="listing-create__input">
      </div>
    
      <div>
        <label for="category">Category</label>
        <select name="category" id="category"
         class="button">
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
         </select>
      </div>

      <div>
        <label for="image">Image</label>
        <input 
         type="file"
         accept="image/jpeg"
         id="image"
         name="image" 
         required
         class="listing-create__form--image-button">
      </div>

    </div>
    <div>
      <button type="submit" class="button" class=".listing-create__submit-button">Add listing</button>
      <h3 class="listing-create__message"></h3>
    </div>
  </form>
</div>
  `;
}
