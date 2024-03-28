<ServiceExceptionReport xmlns="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.3.0" xsi:schemaLocation="http://www.opengis.net/ogc http://schemas.opengis.net/wms/1.3.0/exceptions_1_3_0.xsd">
<ServiceException> msDrawMap(): Image handling error. Failed to draw layer named 'lake-labels'. msGeomTransformShape(): Expression parser error. Failed to process shape expression: centerline([shape]) yyparse(): Expression parser error. Executing centerline failed. msGEOSCenterline(): GEOS library error. Centerline generation failed, try densifying the shapes. </ServiceException>
</ServiceExceptionReport>

https://mapserver.org/mapfile/geomtransform.html#centerline

  GEOMTRANSFORM (centerline(densify([shape], 0.1)))