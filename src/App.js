import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';

import IMG from './img';

function App() {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-10 mt-3">
          <div class="h1">
            Summer Art Camp! 5 Days of Artists and Panting Monet, Van Gogh, Matisse, & More
          </div>
          <div class="text-muted">Multi-DayCourse <i class="bi bi-question-circle"></i>
          </div>
        </div>
        <div class="col-md-10">
          <div class="row justify-content-center mt-5">
            <div class="col-md-6">
              <div class="">
                In this 5 day class we will explore artists Monet, Matisse, Van Gogh,
                among others and then recreate paintings using crayon and watercolor.
                Students will have fun learning about the artists & creating their
                own art inspired by their work.
              </div>
              <div class="py-3">
                <img src={IMG.avatar}
                  alt="avatar" class="avatar me-2" />
                <a href="">Kimberly R Moseler</a>
              </div>

              <div class="text-muted">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill me-2"></i>
                467 total reviews for this teacher
              </div>

              <div class="text-muted">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill me-2"></i>
                5 reviews for this class
              </div>

              <div class="mb-3">Completed by 21 learners</div>

              <div class="btn btn-primary rounded-pill px-4 fw-bold">
                See Class Schedule
                <i class="bi bi-chevron-right"></i>
              </div>
              <a href=""><i class="bi bi-heart ms-3 me-1"></i> Save </a>
              <a href=""><i class="bi bi-share ms-3 me-1"></i> Share </a>

            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-6 pe-2">
                  <img src={IMG.img1}
                    class="img-fluid rounded" alt="img" />
                </div>
                <div class="col-6 p-0">
                  <img src={IMG.img2}
                    class="img-fluid rounded mb-2" alt="img" />
                  <img src={IMG.img3}
                    class="img-fluid rounded" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
