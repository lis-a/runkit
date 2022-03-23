exports.endpoint = function(request, response) {
    let stage = {
        Contract : "Internship",
        Duration : "2-3months",
        StartDate : "18th of April"
    }

    response.end(stage)

    request.end(stage)
}