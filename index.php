<html>
<head>
  <title>Angular Course Glossary</title>
</head>
<body>
  <h1>Angular Course</h1>
  <?php
    $dirs = array_filter(glob('*'), 'is_dir');
    print '<ul>';
    foreach($dirs as $dir){
      print '<li><a href="' . $dir . '/">' . $dir . '</a></li>';
    }
    print '</ul>';
  ?>
</body>
</html>