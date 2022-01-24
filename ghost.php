<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Ng3w Gaming</title>
        <!--CSS-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <!-- style css -->
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <!-- Responsive-->
        <link rel="stylesheet" type="text/css" href="css/responsive.css">
        <!-- fevicon -->
        <link rel="icon" href="images/fevicon.png" type="image/gif" />
        <!-- Scrollbar Custom CSS -->
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
        <!-- Tweaks for older IEs-->
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="ghost.css">
    
</head>

<body class="main-layout">
    
    <header>
            <div class="header-top">
                <?php include('Header.php') ?>
            </div>
    </header>
    
    <div>
        <img name="background" class="background">
    <div class="abs">
    
    <br><br><br><br>
    
    <div class="game1">Game 2: Let's find him<br><br><br>
            <div class="game2">
                <img name="ghost1" onmouseover="ghost1.src='ghost.gif', ghost2.src='ghost.gif', ghost3.src='ghost.gif', ghost4.src='ghost.gif', ghost5.src='ghost.gif'" src="ghost.gif" onclick="ghostgame('ghost1')">&nbsp;&nbsp;&nbsp;
                <img name="ghost2" onmouseover="ghost1.src='ghost.gif', ghost2.src='ghost.gif', ghost3.src='ghost.gif', ghost4.src='ghost.gif', ghost5.src='ghost.gif'" src="ghost.gif" onclick="ghostgame('ghost2')">&nbsp;&nbsp;&nbsp;
                <img name="ghost3" onmouseover="ghost1.src='ghost.gif', ghost2.src='ghost.gif', ghost3.src='ghost.gif', ghost4.src='ghost.gif', ghost5.src='ghost.gif'" src="ghost.gif" onclick="ghostgame('ghost3')">&nbsp;&nbsp;&nbsp;
                <img name="ghost4" onmouseover="ghost1.src='ghost.gif', ghost2.src='ghost.gif', ghost3.src='ghost.gif', ghost4.src='ghost.gif', ghost5.src='ghost.gif'" src="ghost.gif" onclick="ghostgame('ghost4')">&nbsp;&nbsp;&nbsp;
                <img name="ghost5" onmouseover="ghost1.src='ghost.gif', ghost2.src='ghost.gif', ghost3.src='ghost.gif', ghost4.src='ghost.gif', ghost5.src='ghost.gif'" src="ghost.gif" onclick="ghostgame('ghost5')">&nbsp;&nbsp;&nbsp;
            </div>
    </div><br><br><br><br><br>
    
    <?php include('Footer.php') ?>
        
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script type="text/javascript" src="script.js"></script>
        
</div>
</div>
</body>

</html>
