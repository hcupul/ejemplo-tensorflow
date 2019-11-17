<!doctype html>
<html lang="en">
    <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="icon" href="img/favicon.png">
	<title>Ejemplo TensorFlow | ITIC102</title>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/album.css" rel="stylesheet">	
	<link href="css/style.css" rel="stylesheet">
	<!-- TensorFlow -->
	<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>
    </head>

    <body>
	<header>
	    <div class="navbar navbar-dark bg-dark box-shadow">
		<div class="container d-flex justify-content-between">
		    <a href="#" class="navbar-brand d-flex align-items-center">
			<img src="img/favicon.png" />
			<h4 class="tf-label">TensorFlow</h4>
		    </a>
		</div>
	    </div>
	</header>

	<main role="main">

	    <section class="jumbotron text-center">
		<div class="container">
		    <h1 class="jumbotron-heading">Ejemplo de TensorFlow</h1>
		    <p class="lead text-muted">Calculemos el siguiente punto de la gráfica usando los puntos existentes</p>
		    <form class="form-group" id="chkIteraciones">
			<label>Número de iteraciones:</label>
			<br/>
			<div class="form-check form-check-inline">
			    <input class="form-check-input" type="radio" name="chkIteraciones" id="it10" value="10" checked>
			    <label class="form-check-label" for="it10">10</label>
			</div>
			<div class="form-check form-check-inline">
			    <input class="form-check-input" type="radio" name="chkIteraciones" id="it50" value="50">
			    <label class="form-check-label" for="it50">50</label>
			</div>
			<div class="form-check form-check-inline">
			    <input class="form-check-input" type="radio" name="chkIteraciones" id="it100" value="100">
			    <label class="form-check-label" for="it100">100</label>
			</div>
			<div class="form-check form-check-inline">
			    <input class="form-check-input" type="radio" name="chkIteraciones" id="it250" value="250">
			    <label class="form-check-label" for="it250">250</label>
			</div>
			<div class="form-check form-check-inline">
			    <input class="form-check-input" type="radio" name="chkIteraciones" id="it500" value="500">
			    <label class="form-check-label" for="it500">500</label>
			</div>
		    </form>
		    <p>
			<input type="button" class="btn btn-primary my-2" value="Calcular" onclick="calcular();"/>
		    </p>
		    <div class="alert alert-primary" role="alert" id="dvResultado">
			Resultado: 0.00
		    </div>
		</div>
	    </section>

	    <div class="album py-5 bg-light">
		<div class="container">
		    <div class="row">
			<div class="col-md-12">
			    <div class="card mb-4 box-shadow" id="chart">
				<canvas id="canvas"></canvas>
			    </div>
			</div>
		    </div>
		</div>
	    </div>

	</main>

	<footer class="text-muted">
	    <div class="container">
		<p class="float-right">
		    <a href="#">Inicio</a>
		</p>
		<p>Humberto Cupul &copy; 2019</p>
	    </div>
	</footer>

	<!-- Bootstrap core JavaScript
	================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script>window.jQuery || document.write('<script src="js/jquery-slim.min.js"><\/script>')</script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/holder.min.js"></script>
	<script src="js/Chart.js"></script>
	<script src="js/Chart.min.js"></script>
	<script src="js/utils.js"></script>
	<script src="js/script.js?v=1.4"></script>
    </body>
</html>