<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-4">
        <form>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label htmlFor="email" class="form-label">Email address</label>
            <input type="text" class="form-control" id="email" />
          </div>
          <div class="mb-3">
            <label htmlFor="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" />
          </div>
          <div class="mb-3">
            <label htmlFor="c_password" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="c_password" />
          </div>
          <button class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>