export const Rodape = () => {
    return(
        <>
        <footer class="d-flex flex-wrap justify-content-between align-items-center border-top" style={{background: 'rgb(248,249,250)', height: '100px'}}>
          <div class="col-md-4 d-flex align-items-center" style={{marginLeft: '30px'}}>
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <i class="fab fa-bootstrap"></i>
            </a>
            <span class="mb-3 mb-md-0 text-muted">© 2022 Fake Store APÌ</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex" style={{marginRight: '30px'}}>
            <li class="ms-3"><a class="text-muted" href="#"><i class="fab fa-facebook"></i></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><i class="fab fa-instagram"></i></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </footer>
        </>
    )
}