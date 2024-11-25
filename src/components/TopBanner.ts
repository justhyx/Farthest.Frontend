export function createTopBanner(): string {
  return `
    <div class="top-banner bg-white shadow-sm">
      <!-- Ad Carousel -->
      <div id="adCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="p-2 bg-primary text-white text-center">
              Special Offer: 20% off on all items!
            </div>
          </div>
          <div class="carousel-item">
            <div class="p-2 bg-success text-white text-center">
              Free shipping on orders over $50!
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Bar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarContent">
            <ol class="breadcrumb mb-0 me-auto">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Products</li>
            </ol>
            
            <div class="d-flex align-items-center">
              <button class="btn btn-outline-primary me-2">Login</button>
              <button class="btn btn-outline-secondary" id="toggleBanner">
                <i class="bi bi-chevron-up"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `;
}