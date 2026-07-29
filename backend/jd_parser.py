def clean_job_description(job_description):
    """
    Clean the Job Description.
    """

    if not job_description:
        return ""

    cleaned_text = " ".join(job_description.split())

    return cleaned_text.lower()