<template>
  <div class="cover">
    <div class="row">
      <div class="col-lg-12">
      </div>
    </div>
    <div class="panel panel-container">
      <div class="row">
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-teal panel-widget border-right">
            <div class="row no-padding">
              <em class="fa fa-xl fa-shopping-cart color-blue"></em>
              <div class="large">{{ statistics.items }}</div>
              <div class="text-muted">New Posts</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-blue panel-widget border-right">
            <div class="row no-padding">
              <em class="fa fa-xl fa-comments color-orange"></em>
              <div class="large">{{ statistics.orders }}</div>
              <div class="text-muted">Orders</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-orange panel-widget border-right">
            <div class="row no-padding">
              <em class="fa fa-xl fa-users color-teal"></em>
              <div class="large">{{ statistics.users }}</div>
              <div class="text-muted">New Users</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-red panel-widget">
            <div class="row no-padding">
              <em class="fa fa-xl fa-search color-red"></em>
              <div class="large">{{ statistics.auctions }}</div>
              <div class="text-muted">Auctions This Week</div>
            </div>
          </div>
        </div>
      </div>
      <!--/.row-->
    </div>
    <div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						Site Traffic Overview
						<ul class="pull-right panel-settings panel-button-tab-right">
							<li class="dropdown"><a class="pull-right dropdown-toggle" data-toggle="dropdown" href="#">
								<em class="fa fa-cogs"></em>
							</a>
								<ul class="dropdown-menu dropdown-menu-right">
									<li>
										<ul class="dropdown-settings">
											<li><a href="#">
												<em class="fa fa-cog"></em> Settings 1
											</a></li>
											<li class="divider"></li>
											<li><a href="#">
												<em class="fa fa-cog"></em> Settings 2
											</a></li>
											<li class="divider"></li>
											<li><a href="#">
												<em class="fa fa-cog"></em> Settings 3
											</a></li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
						<span class="pull-right clickable panel-toggle panel-button-tab-left"><em class="fa fa-toggle-up"></em></span></div>
					<div class="panel-body">
						<div class="canvas-wrapper">
							<canvas class="main-chart" id="line-chart" height="356" width="1070" style="width: 1070px; height: 356px;"></canvas>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  mounted(){
    axios.get('/admin').then(res => {
      this.statistics = res.data;
    });
  },
  data:function(){
    return {
      statistics:[]
    };
  }
};
</script>
