<!DOCTYPE html>
<html>
<head>
    <title>Ghost!</title>
    <meta http-equiv="Content-Type" content="text/html"; charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="ghost.css">
    
</head>

<body>
    <script type="text/javascript" src="script.js"></script>
    
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
        
</div>
</div>
</body>

</html>
