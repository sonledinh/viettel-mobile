<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Khu vườn kiến tạo</title>
    <!--link css-->
    <link rel="stylesheet" type="text/css" title="" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" title="" href="css/font-awesome.css">
    <link rel="stylesheet" type="text/css" title="" href="css/slick.min.css">
    <link rel="stylesheet" type="text/css" title="" href="css/slick-theme.min.css">
    <link rel="stylesheet" type="text/css" title="" href="css/jquery.mmenu.all.css">
    <link rel="stylesheet" type="text/css" title="" href="css/style.css">
    <link rel="stylesheet" type="text/css" title="" href="css/responsive.css">

    <script type="text/javascript" src="js/jquery.min.js"></script> 
  </head>
  <body>  
    <header>
        <div class="header-top text-right">
            <div class="container">
                <ul>
                    <li><a href="">Trang chủ</a></li>
                    <li><a href="">Liên hệ</a></li>
                    <li><a href="">Tin tức</a></li>
                    <li><a href="">Liên hệ</a></li>
                </ul>
            </div>
        </div>
        <div class="header-boot">
            <div class="container">
                <div class="content-head">
                    <div class="logo"><a href=""><img src="images/logo.png" class="img-fluid" alt=""></a></div>
                    <div class="box-search">
                        <select name="" id="">
                            <option value="">Chọn danh mục</option>
                            <option value="">Nghệ thuật âm nhạc</option>
                            <option value="">Môn toán</option>
                            <option value="">Môn văn</option>
                        </select>
                        <input type="text" placeholder="Nhập từ khóa tìm kiếm ...">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                    <div class="box-user">
                        <div class="box-log">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="javascript:void(0)" data-toggle="modal" data-target="#modal-login">Đăng nhập</a></li>
                                <li class="list-inline-item"><a href="javascript:void(0)" data-toggle="modal" data-target="#modal-regist">Đăng ký</a></li>
                            </ul>
                        </div>
                        <div class="h-cart"><a href=""><i class="fa fa-shopping-cart"></i>Giỏ hàng</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu-mobile" style="display: none;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 col-6">
                        <div class="logo"><a href="index.php"><img src="images/logo.png" class="img-fluid" alt=""></a></div>
                    </div>
                    <div class="col-md-6 col-6">
                        <ul class="list-inline text-right">
                            <li class="list-inline-item">
                                <div class="cart-mb">
                                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                                </div>
                            </li>
                            <li class="list-inline-item">
                                <div class="btn-menu">
                                    <a title="" href="#menu"><i class="fa fa-bars"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav id="menu">
            <ul>
                <li>
                    <input type="text" placeholder="Nhập từ khóa tìm kiếm ...">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </li>
                <li><a href="">Trang chủ</a></li>
                <li><a href="">Liên hệ</a></li>
                <li><a href="">Tin tức</a></li>
                <li><a href="">Liên hệ</a></li>
                <li><a href="javascript:void(0)" data-toggle="modal" data-target="#modal-login">Đăng nhập</a></li>
                <li><a href="javascript:void(0)" data-toggle="modal" data-target="#modal-regist">Đăng ký</a></li>
            </ul>
        </nav>

        <!-- popup user -->
        <div class="modal fade modal-user" id="modal-login">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="title-user text-center">Đăng nhập</div>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="content-user user-login">
                    <div class="item"><i class="fa fa-user"></i><input type="text" placeholder="Username"></div>
                    <div class="item"><i class="fa fa-key"></i><input type="password" placeholder="Password"></div>
                    <div class="item"><a href="">Forgot your password?</a></div>
                    <div class="item"><input type="submit" value="LOGIN"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade modal-user" id="modal-regist">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="title-user text-center">Đăng ký tài khoản</div>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="content-user user-login">
                    <div class="item"><i class="fa fa-user"></i><input type="text" placeholder="Username"></div>
                    <div class="item"><i class="fa fa-key"></i><input type="password" placeholder="Password"></div>
                    <div class="item"><i class="fa fa-key"></i><input type="password" placeholder="Nhập lại pasword"></div>
                    <!-- <div class="item"><a href="">Forgot your password?</a></div>  -->
                    <div class="item"><input type="submit" value="REGISTER"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end popup user -->
    </header>